FROM mcr.microsoft.com/dotnet/core/sdk:3.0-bionic

ENV DEBIAN_FRONTEND=noninteractive

ENV LANG en_GB.UTF-8 
ENV LANGUAGE en_GB:en
ENV LC_ALL en_GB.UTF-8

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils locales \
    && apt-get -y upgrade \
    # locales - must match ENV variables at the top of this script
    && echo "locales locales/default_environment_locale select en_GB.UTF-8" | debconf-set-selections \
    && echo "locales locales/locales_to_be_generated multiselect en_GB.UTF-8 UTF-8" | debconf-set-selections \
    && rm "/etc/locale.gen" \
    && dpkg-reconfigure locales \
    # Essentials
    && apt-get -y install --no-install-recommends \
       apt-transport-https \
       apt-utils \
       ca-certificates \
       curl \
       dialog \
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
    # Terraform
    && wget https://releases.hashicorp.com/terraform/0.12.21/terraform_0.12.21_linux_amd64.zip \
    && unzip terraform_0.12.21_linux_amd64.zip \
    && mv terraform /usr/local/bin/ \
    && rm -rf terraform* \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ADD .post-create.sh /root
ADD .zshrc /root

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "sleep", "infinity" ]