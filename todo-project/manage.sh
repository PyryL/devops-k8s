#!/bin/bash

set -e

if [ "$1" == "apply" ]; then
    kubectl apply -f ../misc/namespace_todo.yaml
    kubens todo
    kubectl apply -f manifests/ -f backend/manifests/
elif [ "$1" == "delete" ]; then
    kubectl delete -f manifests/ -f backend/manifests/
else
    echo "usage: $0 {apply|delete}"
    exit 1
fi
