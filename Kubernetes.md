# Basics of Kubernetes

## Basic Infrastructure

![Kubernetes Infrastructure](img/Kubernetes.svg)

## Transfer Knowledge

We used for docker-compose and the deployment to AWS a config file to describe what we want to do. The same applies for Kubernetes.

![Config-files](img/Config-files.svg)


So to transfer the knowledge we have from the docker-compose file take a look at the following:

![Compose-vs-Kubernetes](img/Comparison.svg)

In the picture you see that in case of Kuberentes we are talking about **objects**. 

## Kubernetes Objects and API Versions

![Object-Types](img/Object_Types.svg)

In Kubernetes there exists different kinds of Objects which we want to create through our config-files.

Usage of differenet types:

![Pod_vs_Serivces](img/Pods_vs_Services.svg)

 - **Pod**: A Pod is used for running a container
 - **Services**: Setting up some networking 

### Pod in Detail:

![POD](img/Pod_Detail.svg)
 
### Services in Detail:

![Services](img/Services_Detail.svg)


 In Kubernetes the API version defines a different set of Objects which can be used, so its necessary to know which Object you want to create to specify the API Version:

 ![API-Version](img/K8s-API.svg)

 ## Commands

![apply-config-file](img/K8s_commands.svg)

## Deployment flow

![Deployment_Flow](img/Deployment-Flow.svg)

## Takeaways

![Takeaways](img/K8s_Important_Takeways.svg)

## Imperative vs Declarative

![Imperative_vs_Declarative](img/Imperative_vs_declarative.svg)