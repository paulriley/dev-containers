FROM sittingonthedock/vscode-components-unpacker:1.0

ARG UNPACK_FOLDER="/tmp/extract/terraform"

RUN TERRAFORM_VERSION=0.12.26 \
    && TERRAFORM_LSP_VERSION=0.3.2 \
    && TERRAFORM_AWS_PROVIDER_VERSION=2.59.0 \
    && mkdir -p ${UNPACK_FOLDER}/lsp ${UNPACK_FOLDER}/bin \
    && wget -c https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip \
    && unzip terraform_${TERRAFORM_VERSION}_linux_amd64.zip -d ${UNPACK_FOLDER}/bin \
    && wget -c https://releases.hashicorp.com/terraform-provider-aws/${TERRAFORM_AWS_PROVIDER_VERSION}/terraform-provider-aws_${TERRAFORM_AWS_PROVIDER_VERSION}_linux_amd64.zip \
    && unzip terraform-provider-aws_${TERRAFORM_AWS_PROVIDER_VERSION}_linux_amd64.zip -d ${UNPACK_FOLDER}/lsp \
    && echo "provider \"aws\" {}" >> ${UNPACK_FOLDER}/lsp/providers.tf \
    && wget -c https://releases.hashicorp.com/terraform-ls/${TERRAFORM_LSP_VERSION}/terraform-ls_${TERRAFORM_LSP_VERSION}_linux_amd64.zip \
    && unzip terraform-ls_${TERRAFORM_LSP_VERSION}_linux_amd64.zip -d ${UNPACK_FOLDER}/lsp
