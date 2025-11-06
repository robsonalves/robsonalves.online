---
title: "Autoscalamento do Kubernetes: HPA, VPA e Cluster Autoscaler"
date: "2025-11-06T12:52:07.201Z"
description: "Em ambientes de nuvem dinâmicos atuais, gerenciar as cargas de trabalho das aplicações de forma eficiente é crucial. Imagine um cenário em que seu aplicativo web lida com milhões..."
tags: ["kubernetes","devops","cloud"]
readTime: "5 min"
author: "Robson Alves"
image: "https://images.unsplash.com/photo-1759272548470-d0686d071036?ixid=M3w4MjQ1OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI0MzM1Mjd8&ixlib=rb-4.1.0&w=1200&q=80&fit=crop"
---
# Autoscalamento do Kubernetes: HPA, VPA e Cluster Autoscaler

Em ambientes de nuvem dinâmicos atuais, gerenciar eficientemente as cargas de trabalho das aplicações é crucial. Imagine um cenário em que seu aplicativo web lida com milhões de solicitações durante os picos, mas apenas uma fração disso durante os horários fora do pico. Escalar manualmente os recursos para lidar com essa variabilidade pode ser tedioso e propenso a erros.

Entender o autoscaling no Kubernetes é essencial, pois ajuda a otimizar o uso de recursos, reduzir custos e garantir alta disponibilidade. Ao final deste post de blog, você aprenderá como Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA) e Cluster Autoscaler trabalham juntos para gerenciar seus clusters Kubernetes de forma eficiente.

## Entendendo os Fundamentos

Autoscaling no Kubernetes é uma característica que ajusta automaticamente o número de recursos necessários pela sua aplicação com base na demanda. Isso garante que as aplicações possam lidar com cargas variáveis sem intervenção manual.

Existem três tipos principais de autoscalers no Kubernetes: Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA) e Cluster Autoscaler. Cada um serve um propósito diferente, mas trabalha juntos para otimizar o gerenciamento de recursos.

---

## Horizontal Pod Autoscaler (HPA)

Horizontal Pod Autoscaler ajusta automaticamente o número de réplicas de pods em uma implantação, conjunto de réplicas, conjunto com estado ou controlador de replicação com base no uso observado da CPU (ou outras métricas selecionadas).

### Como o HPA Funciona

HPA monitora o uso da CPU dos pods e escala para cima adicionando mais réplicas se necessário. Por outro lado, ele reduz o número de réplicas se o uso da CPU cair abaixo do limite especificado.

```yaml
# Exemplo de configuração HPA
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: php-apache
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: php-apache
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50 # Uso de CPU alvo em 50%
```

Esta configuração define o HPA para uma implantação chamada `php-apache`, garantindo que ela seja escalada entre 1 e 10 réplicas com base em um uso de CPU de 50%.

---

## Vertical Pod Autoscaler (VPA)

Vertical Pod Autoscaler ajusta automaticamente os pedidos e limites de recursos dos pods para melhorar o desempenho da aplicação sem intervenção manual. O VPA é particularmente útil quando você não tem métricas precisas para a alocação ótima de recursos.

### Como o VPA Funciona

O VPA opera em três modos: `Off`, `Initial` e `Recreate`. No modo `Initial`, ele define valores iniciais com base em dados de uso históricos. No modo `Recreate`, ele atualiza os recursos excluindo e recriando pods com novas configurações.

```yaml
# Exemplo de configuração VPA
apiVersion: "autoscaling.k8s.io/v1"
kind: VerticalPodAutoscaler
metadata:
  name: vpa-resource-consumer
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: resource-consumer
  updatePolicy:
    updateMode: "Recreate" # Recriar pods para aplicar novos recursos
```

Esta configuração define o VPA para uma implantação chamada `resource-consumer`, usando o modo `Recreate` para atualizar os pedidos e limites de recurso.

---

## Cluster Autoscaler

Cluster Autoscaler ajusta automaticamente o tamanho do seu cluster Kubernetes adicionando ou removendo nós com base na demanda. Isso ajuda a garantir que todos os pods tenham um nó para serem executados, otimizando custos reduzindo recursos desnecessários durante períodos de baixo tráfego.

### Como o Cluster Autoscaler Funciona

Cluster Autoscaler monitora os pedidos e limites de recursos em todos os namespaces e escala o cluster para cima se houver recursos insuficientes. Por outro lado, ele escala o cluster para baixo quando os nós estão subutilizados.

```bash
# Exemplo de comando para instalar Cluster Autoscaler
kubectl apply -f https://raw.githubusercontent.com/kubernetes/autoscaler/master/cluster-autoscaler/cloudprovider/aws/examples/cluster-autoscaler-autodiscover.yaml

# Configurar autoscaler com contagem mínima e máxima de nós
kubectl -n kube-system set env deployment.apps/cluster-autoscaler \
  AUTO_DISCOVERY=true \
  SCAN_INTERVAL=10s \
  EXPANDER=random \
  SKIP_NODES_WITH_SYSTEM_PODS=false \
  BALANCE_SIMILAR_NODE_GROUPS=true \
  MIN_NODES=2 \
  MAX_NODES=10
```

Este comando instala e configura o Cluster Autoscaler para um cluster AWS EKS, configurando-o para gerenciar grupos de nós entre 2 e 10 nós.

---

## Integrando HPA, VPA e Cluster Autoscaler

Integrar esses três autoscalers fornece uma abordagem abrangente para gerenciar os recursos do Kubernetes. Aqui está como eles trabalham juntos:

- **HPA** lida com o número de réplicas de pods com base na CPU ou outras métricas.
- **VPA** ajusta os pedidos e limites de recurso para um desempenho otimizado.
- **Cluster Autoscaler** gerencia o número de nós no cluster.

### Exemplo de Cenário de Integração

Considere um aplicativo web com padrões de tráfego variáveis. Durante os picos, o HPA aumenta o número de réplicas de pods para lidar com a carga aumentada. O VPA garante que cada pod tenha recursos adequados alocados com base em dados históricos. Se ainda forem necessários recursos adicionais além do que os nós existentes podem fornecer, o Cluster Autoscaler escala o cluster para cima adicionando mais nós.

---

## Solução de Problemas

### Problemas Comuns com HPA

- **Indisponibilidade do Metric Server**: Certifique-se de que o Metric Server está em execução e configurado corretamente.
- **Métricas Alvo Incorretas**: Verifique se as métricas especificadas (por exemplo, uso da CPU) são precisas.

```bash
# Verificar se o Metric Server está em execução
kubectl get deployment metric-server -n kube-system
```

### Problemas Comuns com VPA

- **Interrupção de Pod**: Tenha cuidado ao usar o modo `Recreate`, pois pode causar interrupções.
- **Inacurácia de Dados Históricos**: Certifique-se de que os dados históricos usados pelo VPA são representativos do uso real.

```bash
# Verificar recomendações do VPA
kubectl get vparesourcepolicy -o yaml
```

### Problemas Comuns com Cluster Autoscaler

- **Configuração do Grupo de Nós**: Certifique-se de que os grupos de nós estão corretamente configurados para autoscaling.
- **Limites da API do Cluster**: Esteja ciente dos limites da API do cluster que podem afetar as operações de escala.

```bash
# Verificar logs do Cluster Autoscaler por erros
kubectl logs -n kube-system deployment.apps/cluster-autoscaler
```

---

## Conclusão

Autoscaling é um componente crítico para gerenciar clusters Kubernetes de forma eficiente. Ao aproveitar o Horizontal Pod Autoscaler, Vertical Pod Autoscaler e Cluster Autoscaler, você pode garantir que suas aplicações desempenhem otimamente sob cargas variáveis enquanto minimiza custos.

**Principais Takeaways:**

1. HPA ajusta o número de réplicas de pods com base na CPU ou outras métricas.
2. VPA modifica os pedidos e limites de recurso para um desempenho otimizado.
3. Cluster Autoscaler gerencia o tamanho do seu cluster Kubernetes adicionando ou removendo nós.

> ⚠️ **Aviso**: Sempre teste as configurações de autoscaling em um ambiente de preparação antes de implantar na produção.

Ao entender e implementar esses autoscalers, você pode melhorar significativamente a confiabilidade e eficiência das suas implantações Kubernetes.