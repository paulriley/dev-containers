FROM buildpack-deps:focal-curl

ENV DEBIAN_FRONTEND=noninteractive

ARG USERNAME
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt-get update \
    # Essentials
    && apt-get -y install --no-install-recommends \
       apt-transport-https \
       apt-utils \
       ca-certificates \
       curl \
       dialog \
       dnsutils \
       docker.io \
       gcc \
       git \
       gnupg-agent \
       groff \
       iproute2 \
       less \
       lsb-release \
       net-tools \
       openssh-client \
       procps \
       python3-pip \
       python3-setuptools \
       software-properties-common \
       sudo \
       unzip \
       2>&1 \
    && groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID $USERNAME \
    && mkdir /home/$USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME \
    && usermod -a -G sudo ${USERNAME} \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "sleep", "infinity" ]