FROM mcr.microsoft.com/dotnet/core/sdk:2.1

ENV DEBIAN_FRONTEND=noninteractive
# Or your actual UID, GID on Linux if not the default 1000
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

USER root

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils \
    && apt-get -y upgrade \
    && apt-get -y install --no-install-recommends zsh sudo \
    && apt-get -y install --no-install-recommends apt-transport-https ca-certificates curl \
       gnupg-agent software-properties-common lsb-release gcc apt-utils dialog git iproute2 \
       procps 2>&1 \
    # create user and install oh-my-zsh \
    && wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true \
    # Add repositories:
    #   Docker
    && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]') $(lsb_release -cs) stable" \
    # Update new repos
    && apt-get update \
    # Install Docker CLI
    && apt-get install -y docker-ce-cli \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "sleep", "infinity" ]