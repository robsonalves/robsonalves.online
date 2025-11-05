---
title: "Kubernetes Monitoring with Prometheus and Grafana"
date: "2025-11-01T14:26:12.916Z"
description: "In today’s dynamic cloud-native landscape, ensuring the health and performance of your applications is more critical than ever. Imagine a scenario where yo..."
tags: ["kubernetes","devops","cloud"]
readTime: "6 min"
author: "Robson Alves"
image: "https://images.unsplash.com/photo-1722949572042-7f061ec53f2d?w=1200&q=80"
---
# Kubernetes Monitoring with Prometheus and Grafana

In today’s dynamic cloud-native landscape, ensuring the health and performance of your applications is more critical than ever. Imagine a scenario where your production cluster starts to experience unexpected slowdowns without any clear indicators—chaos can ensue if you're not prepared. This is why robust monitoring solutions are indispensable.

As we move towards 2025, the demand for sophisticated monitoring tools will only grow. With Kubernetes becoming the standard for container orchestration, integrating reliable monitoring solutions like Prometheus and Grafana into your stack becomes essential for maintaining optimal performance and reliability.

In this blog post, you’ll learn how to set up Prometheus for metrics collection and Grafana for visualization in a Kubernetes environment. We'll cover everything from installation to configuring dashboards, ensuring you have a comprehensive view of your cluster's health.

## Introduction to Prometheus

Prometheus is an open-source monitoring system with a dimensional data model, flexible query language, efficient time series database, and modern alerting approach. Its architecture revolves around collecting metrics from configured targets at given intervals, evaluating rule expressions, displaying the results, and triggering alerts if certain conditions are met.

### Why Use Prometheus?

- **Multi-dimensional Metrics**: Prometheus uses labels to enrich metric data with additional dimensions, making it easier to slice and dice your data.
- **High Performance**: Designed for high cardinality metrics collection and storage, ensuring scalability without compromising performance.
- **Pull-Based Architecture**: Prometheus periodically scrapes metrics from HTTP endpoints exposed by instrumented applications.

## Introduction to Grafana

Grafana is an open-source platform that allows you to query, visualize, alert on, and understand your metrics no matter where they are stored. With support for multiple data sources like Prometheus, InfluxDB, and more, Grafana provides a unified view of all your monitoring data.

### Why Use Grafana?

- **Rich Visualization**: Offers a wide array of visualization options, from simple graphs to complex dashboards.
- **Alerting and Notifications**: Enables you to set up alerts based on metric thresholds and send notifications via email, Slack, or other channels.
- **Extensible with Plugins**: Supports custom plugins for extended functionality and integration with various data sources.

---

## Setting Up Prometheus in Kubernetes

### Step 1: Add Prometheus Helm Repository

Helm simplifies the deployment of complex applications onto Kubernetes. We'll use it to install Prometheus and Grafana.

```bash
# Add the stable Helm chart repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

> 💡 **Tip**: Always check for updates in the official documentation before adding a new repository.

### Step 2: Install Prometheus

We'll deploy Prometheus using its Helm chart, which provides a comprehensive configuration out of the box.

```bash
# Create a namespace for monitoring tools
kubectl create namespace monitoring

# Install Prometheus into the monitoring namespace
helm install prometheus prometheus-community/prometheus --namespace monitoring
```

### Step 3: Verify Installation

After installation, check if all pods are running in the `monitoring` namespace.

```bash
# Get the status of pods in the monitoring namespace
kubectl get pods -n monitoring
```

---

## Setting Up Grafana in Kubernetes

### Step 1: Install Grafana

Similar to Prometheus, we'll use Helm to install Grafana into our cluster.

```bash
# Add the Grafana Helm chart repository
helm repo add grafana https://grafana.github.io/helm-charts

# Update Helm repositories
helm repo update

# Install Grafana
helm install grafana grafana/grafana --namespace monitoring
```

### Step 2: Access Grafana Dashboard

To access Grafana, we need to expose the service and obtain the default admin password.

```bash
# Get the admin password for Grafana
kubectl get secret --namespace monitoring grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

# Port-forward Grafana service to your local machine
kubectl port-forward svc/grafana 3000:80 -n monitoring
```

Open `http://localhost:3000` in your browser and log in using the username `admin` and the password obtained from the previous command.

---

## Integrating Prometheus with Grafana

### Step 1: Add Prometheus as a Data Source

Once logged into Grafana, add Prometheus as a data source to visualize metrics.

1. Navigate to **Configuration > Data Sources**.
2. Click on **Add data source** and select **Prometheus**.
3. Set the URL to `http://prometheus-server.monitoring.svc.cluster.local` (the service name for Prometheus in Kubernetes).
4. Save & Test the configuration.

### Step 2: Create a Dashboard

Let's create a simple dashboard to visualize node metrics.

1. Click on **Create > Dashboard**.
2. Add a new panel by clicking on **Add New Panel**.
3. In the query editor, enter `node_load1` and click **Apply**.
4. Customize your panel as needed (e.g., change visualization type).
5. Save the dashboard.

---

## Advanced Configurations

### Customizing Prometheus Scrape Targets

To monitor additional services, you need to define custom scrape targets in Prometheus.

```yaml
# Example Prometheus configuration snippet for additional scrape target
scrape_configs:
  - job_name: 'custom-app'
    static_configs:
      - targets: ['custom-app.monitoring.svc.cluster.local:8080']
```

Apply this configuration by creating a ConfigMap and mounting it into the Prometheus pod.

### Alerting in Prometheus

Set up alert rules to notify you of critical conditions.

```yaml
# Example alert rule for high CPU usage
groups:
- name: example
  rules:
  - alert: HighCpuUsage
    expr: node_load1 > 1.5
    for: 1m
    labels:
      severity: page
    annotations:
      summary: "High load on {{ $labels.instance }}"
      description: "{{ $labels.instance }} has a load average of {{ $value }} for more than 1 minute."
```

Create a rules file and apply it to Prometheus.

---

## Troubleshooting Common Issues

### Issue: Grafana Dashboard Not Showing Data

- **Check Data Source Configuration**: Ensure Prometheus is correctly configured as a data source in Grafana.
- **Verify Prometheus Metrics**: Use `kubectl port-forward` to access the Prometheus UI and check if metrics are being scraped.

### Issue: High Memory Usage by Prometheus

- **Increase Resources**: Adjust CPU and memory limits for the Prometheus pod.
- **Optimize Metric Collection**: Review your scrape targets and consider reducing their intervals or filtering out unnecessary metrics.

---

## Conclusion

Monitoring is a critical aspect of any production environment, especially in Kubernetes where dynamic scaling and container orchestration can lead to complex issues. By integrating Prometheus and Grafana, you gain powerful tools for monitoring your cluster’s health and performance.

**Key Takeaways:**

1. **Prometheus collects metrics efficiently with its pull-based architecture**.
2. **Grafana provides rich visualization and alerting capabilities**.
3. **Proper configuration of scrape targets is essential for accurate metrics collection**.

---

# Cover Image

https://images.unsplash.com/photo-1508974690384-cb884c98d175?w=1200&q=80