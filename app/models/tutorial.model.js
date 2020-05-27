module.exports = mongoose => {
    //const Tutorial = mongoose.model(
      //"tutorial",
      var schema = mongoose.Schema(
        {
          title: String,
          author: String,
          description: String,
          date: Date,
          published: Boolean
        },
        { timestamps: true }
      //)//, "books" -collection name
    );

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };