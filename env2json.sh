cat << EOF > src/cdk-exports.json
{"BackendStack":{"apiName": "$TODOLIST_API_NAME", "awscognitoregion": "$TODO_REGION", "userpool": "$USERPOOL_ID", "webclientid": "$WEB_CLIENT_ID", "identitypool": "$IDENTITYPOOL_ID", "apiendpoint": "$TODOLIST_API_URL"}}
EOF