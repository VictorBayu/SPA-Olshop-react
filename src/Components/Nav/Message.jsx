import React, { Component } from "react";
import app from "../config/fire";
import firebase from "firebase";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import BlogComments from "../Post/BlogComments";
import "../../css/Blog.css";

class Message extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(app);
    }
    this.state = {
      listComment: [],
    };
  }
  ambilDataDariServerAPI = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };
  simpanDatakeServerAPI = () => {
    firebase.database().ref("/").set(this.state);
  };
  componentDidMount() {
    this.ambilDataDariServerAPI();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.simpanDatakeServerAPI();
    }
  }
  handleHapusComment = (idComment) => {
    const { listComment } = this.state;
    const newState = listComment.filter((data) => {
      return data.uid !== idComment;
    });
    this.setState({ listComment: newState });
  };
  handleTombolSimpan = (event) => {
    let title = this.refs.namaComment.value;
    let body = this.refs.isi.value;
    let uid = this.refs.uid.value;
    if (uid && title && body) {
      const { listComment } = this.state;
      const indeksArtikel = listComment.findIndex((data) => {
        return data.uid === uid;
      });
      listComment[indeksArtikel].title = title;
      listComment[indeksArtikel].body = body;
      this.setState({ listComment });
    } else if (title && body) {
      const uid = new Date().getTime().toString();
      const { listComment } = this.state;
      listComment.push({ uid, title, body });
      this.setState({ listComment });
    }
    this.refs.namaComment.value = "";
    this.refs.isi.value = "";
    this.refs.uid.value = "";
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>List Comment</h2>
            {this.state.listComment.map((saran) => {
              return (
                <BlogComments
                  key={saran.uid}
                  nama={saran.title}
                  isi={saran.body}
                  idComment={saran.uid}
                  hapus={this.handleHapusComment}
                />
              );
            })}
          </Col>
          <Col>
            <Card>
              <Card.Header>Comment</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <Form>
                    <Form.Group>
                      <input
                        id="title"
                        name="title"
                        ref="namaComment"
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <input
                        id="body"
                        name="body"
                        ref="isi"
                        className="form-control"
                        type="text"
                        placeholder="Enter your comment"
                      />
                    </Form.Group>
                    <Form.Group>
                      <input type="hidden" name="uid" ref="uid" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleTombolSimpan}>
                      Send
                    </Button>
                  </Form>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Message;
