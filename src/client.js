import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "468cfd1y",
  dataset: "production",
  token: "sanity-auth-token",
  useCdn: true,
  apiVersion: "2021-03-25"
});