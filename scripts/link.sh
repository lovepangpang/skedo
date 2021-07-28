DIR=$(cd `dirname $0`; pwd)

cd "$DIR/../packages/skedo-request"
yarn link
cd "$DIR/../packages/skedo-core"
yarn link
cd "$DIR/../packages/skedo-render"
yarn link @skedo/request
yarn link @skedo/core
cd "$DIR/../packages/skedo-ui"
yarn link @skedo/core
yarn link @skedo/request
yarn link @skedo/skedo-render

cd "$DIR/../packages/skedo-svc/config"
yarn link
cd "$DIR/../packages/skedo-svc/doc"
yarn link @skedo/svc-config