import { getCircularReplacer } from "../../../common/utils";


module.exports.handler = async function (event: any, context: any) {
    console.log("create-surveys schedule handler");

    console.log(`event:${JSON.stringify(event, getCircularReplacer(), 4)}`);
    console.log(`context:${JSON.stringify(context, getCircularReplacer(), 4)}`);

    context.succeed(fetchServices())

}

function fetchServices() {

    return {
        "services": [
          {
            "hook": "patient-view",
            "name": "Static CDS Service Example",
            "description": "An example of a CDS Service that returns a card with SMART app recommendations.",
            "id": "static-patient-view",
            "prefetch": {
              "patientToGreet": "Patient/{{context.patientId}}"
            }
          }
        ]
      }
}