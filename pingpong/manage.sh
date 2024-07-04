#!/bin/bash

set -e

if [ "$1" == "apply" ]; then
    kubectl apply -f ../misc/namespace_pinglog.yaml
    kubens pinglog
    kubectl apply -f manifests/ -f ../log-output/manifests/
elif [ "$1" == "delete" ]; then
    kubectl delete -f manifests/ -f ../log-output/manifests/
else
    echo "usage: $0 {apply|delete}"
    exit 1
fi
