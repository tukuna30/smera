import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const renderInterns = () => {
  const interns = [
    { name: "Akankshya Behera", details: "Master in Computer Science" },
    {
      name: "Deepak Kumar Naik",
      details: "Master in Computer Science",
    },
    { name: "Subhasmita Kumari", details: "Master in Computer Science" },
    { name: "Suman Patro", details: "Master in Computer Science" },
  ];

  return interns.map((intern) => {
    return (
      <div>
        <Card style={{ minWidth: "320px", margin: "10px", padding: "10px" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {intern.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {intern.details}
              </Typography>
              {intern.imageUrl && (
                <img
                  alt="intern profile"
                  style={{ width: "40px", height: "auto", borderRadius: "50%" }}
                  src={intern.imageUrl}
                ></img>
              )}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary">Details</Button>
          </CardActions>
        </Card>
      </div>
    );
  });
};

const Interns = () => {
  return (
    <div style={{ maxHeight: "400px", overflow: "auto" }}>
      {renderInterns()}
    </div>
  );
};

export default Interns;
