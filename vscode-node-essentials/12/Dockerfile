FROM node:12

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils \
    && apt-get -y upgrade \
    && apt-get -y install --no-install-recommends \
       apt-transport-https \
       apt-utils \
       ca-certificates \
       curl \
       dialog \
       gcc \
       git \
       gnupg-agent \
       iproute2 \
       lsb-release \
       procps \
       python3-dev \
       python3-pip \
       python3-setuptools \
       software-properties-common \
       zsh \
       2>&1 \
    # create user and install oh-my-zsh \
    && wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true \
    && rm -rf /root/.oh_my_zsh \
    # Add repositories:
    #   Docker
    && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]') $(lsb_release -cs) stable" \
    # Update new repos
    && apt-get update \
    # Install Docker CLI
    && apt-get install -y docker-ce-cli \
    # Install Docker Compose CLI
    && pip3 install wheel \
    && pip3 install docker-compose \
    # Install AWS CLI & Templates
    && pip3 install awscli \
    && pip3 install awscli-local \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ADD .post-create.sh /root
ADD .zshrc /root

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "sleep", "infinity" ]