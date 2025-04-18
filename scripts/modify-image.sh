#!/bin/bash

MARK="// ALIYUN MIRRORS (AUTO GENERATED)"
search_value="mavenCentral()"
imgs=(
  "https://maven.aliyun.com/repository/central"
  "https://maven.aliyun.com/repository/public"
  "https://maven.aliyun.com/repository/google"
  "https://maven.aliyun.com/repository/gradle-plugin"
  "https://maven.aliyun.com/repository/jcenter"
)
cmd="s|${search_value}[[:space:]]*$|\\n"

for img in ${imgs[@]}; do
  cmd+="maven { url = uri(\"${img}\") }\\n"
done
cmd+="${search_value} ${MARK}|g"

find node_modules/ -type f \( -name "*.kts" -o -name "*.gradle" \) -exec sed -i "$cmd" {} +