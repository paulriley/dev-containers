FROM buildpack-deps:focal-curl AS basics

ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        apt-transport-https \
        apt-utils \
        dialog \
        dnsutils \
        docker.io \
        gcc \
        git \
        git-man \
        gnupg-agent \
        groff \
        iproute2 \
        less \
        man-db \
        net-tools \
        procps \
        python3-pip \
        python3-setuptools \
        sudo \
        unzip \
        2>&1 \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID $USERNAME \
    && mkdir /home/$USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME \
    && usermod -a -G sudo ${USERNAME} \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

ENV DEBIAN_FRONTEND=