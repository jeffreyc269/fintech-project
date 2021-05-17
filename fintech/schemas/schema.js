// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Partner",
      name: "partner",
      type: "image",

      fields: [
        {
          name: "partner",
          type: "image",
          title: "Partner",
        },
      ],
    },
    {
      name: "upcoming",
      title: "Upcoming",
      type: "document",
      fields: [
        {
          name: "event",
          title: "Event Name",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "url",
        },
      ],
    },
    {
      name: "past",
      title: "Past",
      type: "document",
      fields: [
        {
          name: "event",
          title: "Event Name",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "url",
        },
      ],
    }
  ]),
});
