import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Row, Col } from "react-bootstrap";

const BlogComments = (Victor) => {
  return (
    <div className="comment">
      <Row>
        <Col>
          <div className="gambar-user">
            <img
              src="https://i.ibb.co/gM2CSjf/user-picture.png"
              alt="Gambar Thumbnail user"
            />
          </div>
        </Col>
        <Col>
          <div className="konten-comment">
            <div className="nama_comment">{Victor.nama}</div>
            <p className="isi-artikel">{Victor.isi}</p>
          </div>
        </Col>
        <Col>
          <DeleteIcon
            className="btn btn-sm btn-warning"
            style={{ fontSize: 40 }}
            onClick={() => {
              if (window.confirm("Are you sure want to remove this comment ?"))
                Victor.hapus(Victor.idComment);
            }}
          >
            Delete
          </DeleteIcon>
        </Col>
      </Row>
    </div>
  );
};

export default BlogComments;
