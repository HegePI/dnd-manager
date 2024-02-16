# DND manager

## Development

### Install tools

For windows [chocolatey](https://chocolatey.org/) is easy way to install these tools

- minikube
- skaffold
- docker
- Node Version Manager, nvm, for [linux](https://github.com/nvm-sh/nvm), for [windows](https://github.com/coreybutler/nvm-windows)

### Minikube

[Minikube drivers](https://minikube.sigs.k8s.io/docs/drivers/)

In linux preferred way to run minikube is inside docker.

In windows preferred way is to run in hyperv.

### Start minikube

Linux

`minikube start --cpus=4 --memory=4096 --disk-size=20000 --driver=docker --addons=ingress`

Windows

`minikube start --cpus=4 --memory=4096 --disk-size=20000 --driver=hyperv --hyperv-use-external-switch=true --addons=ingress`

### Edit hosts file

Fetch the ip of the minikube cluster

`minikube ip`

Append following line to the hosts file of your system, in linux **/etc/hosts**, in windows **c:\Windows\System32\Drivers\etc\hosts**

`<MINIKUBE_IP>  dnd-manager.local`

### Start the project in development mode

`skaffold dev`

when all services started go to [dnd-manager.local](http://dnd-manager.local)
