import client from "../../../../../config/sanity.config"
export const hero = (payload) => {
   client
      .fetch(
            `*[_type == "uahome" ]{
            heading,
            description,
            bannerhref,
            buttontext,
               }
               `
      )
      .then((data) => {
            payload.setLanding(data)
      })
      .catch(error => {
            console.log("we made it", error.message)
      });
}
export default hero