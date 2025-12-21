{{- define "postgres-stack.fullname" -}}
{{- include "postgres-stack.name" . -}}
{{- end -}}

{{- define "postgres-stack.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}
