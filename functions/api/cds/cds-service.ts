import { getCircularReplacer } from "../../../common/utils";


module.exports.handler = async function (event: any, context: any) {
    console.log("cds-service handler");

    console.log(`event:${JSON.stringify(event, getCircularReplacer(), 4)}`);
    console.log(`context:${JSON.stringify(context, getCircularReplacer(), 4)}`);
      
    const {serviceId}  = event.path;

    context.succeed(buildResponse(serviceId))

}

function buildResponse(serviceId) {

    return {
        "cards": [
            {
                "uuid": "450b76d7-ba27-4522-bb4f-9e364b0bb4f3",
                "summary": `Response Card for: ${serviceId} `,
                "source": {
                    "label": "Patient greeting service"
                },
                "indicator": "info"
            }
        ]
    }
}