import {
    useRouteParams
  } from "@shopify/hydrogen";
  import Collection from "../../components/collections/singleCollection";
const SingleCollection = () => {



    const { handle } = useRouteParams()

return(
    <Collection data={handle} />
)
}

export default SingleCollection