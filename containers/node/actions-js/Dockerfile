FROM sittingonthedock/vscode-components-basic-tools

ENV DEBIAN_FRONTEND=noninteractive

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        nodejs \
        npm

ENV DEBIAN_FRONTEND=
