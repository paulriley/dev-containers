FROM sittingonthedock/unpacker:1.0

ARG UNPACK_FOLDER="/tmp/extract/dotnet"

RUN DOTNET_SDK_VERSION=3.1.102 \
    && curl -SL --output dotnet.tar.gz https://dotnetcli.azureedge.net/dotnet/Sdk/$DOTNET_SDK_VERSION/dotnet-sdk-$DOTNET_SDK_VERSION-linux-x64.tar.gz \
    && dotnet_sha512='9cacdc9700468a915e6fa51a3e5539b3519dd35b13e7f9d6c4dd0077e298baac0e50ad1880181df6781ef1dc64a232e9f78ad8e4494022987d12812c4ca15f29' \
    && echo "$dotnet_sha512 dotnet.tar.gz" | sha512sum -c - \
    && mkdir -p ${UNPACK_FOLDER} \
    && tar -ozxf dotnet.tar.gz -C ${UNPACK_FOLDER} \
    && ls -la ${UNPACK_FOLDER}
