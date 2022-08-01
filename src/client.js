import client from "@sanity/client"

export default client({
    projectId:"6xydrsx9",
    dataset:"production",
    useCdn: true,
    apiVersion: "2022-08-01"
})