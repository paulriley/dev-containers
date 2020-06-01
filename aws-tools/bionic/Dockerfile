FROM buildpack-deps:bionic

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update \
    && apt-get -y install --no-install-recommends \
       apt-transport-https \
       apt-utils \
       ca-certificates \
       curl \
       dialog \
       docker.io \
       dnsutils \
       gcc \
       git \
       gnupg-agent \
       groff \
       iproute2 \
       less \
       lsb-release \
       man-db \
       net-tools \
       procps \
       python3-pip \
       python3-setuptools \
       software-properties-common \
       unzip \
       zsh \
       2>&1 \
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

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "sleep", "infinity" ]