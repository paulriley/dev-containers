FROM sittingonthedock/vscode-components-basic-tools:1.0

ENV DEBIAN_FRONTEND=noninteractive

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        nodejs \
        npm \
    && npm install -g \
        typescript

ENV DEBIAN_FRONTEND=
