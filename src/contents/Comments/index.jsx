import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CommentArea from "../../components/CommentArea";
import CommentTextInput from "../../components/CommentTextInput";
import styles from "./styles.module.css";
import { fetchData } from "../../services/api";

const Comments = ({ className = "", title = "Comments", ...props }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("/comments")
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div {...props}>
      <Card>
        <h5 className={`${styles.title}`}>{title}</h5>
        {data &&
          data
            ?.slice(-10)
            ?.map((data) => (
              <CommentArea key={data?.id} name={data?.name.slice(0, 10)} body={data?.body} />
            ))}
        <div className={`${styles.commentInputContainer}`}>
          <CommentTextInput />
        </div>
        <div className={`${styles.buttonContainer}`}>
          <Button type="primaryBtn">Send</Button>
        </div>
      </Card>
    </div>
  );
};

export default Comments;
