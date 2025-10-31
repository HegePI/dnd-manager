{{- define "postgrest.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "postgrest.fullname" -}}
{{- printf "%s-%s" (include "postgrest.name" .) .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
