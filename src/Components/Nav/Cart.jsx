import React, { Component } from "react";
import Post from "../Post/PostKeranjang";
import { Table } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Post.css";

class Cart extends Component {
  state = {
    cart: [],
  };
  index = 1;

  ambilDataDariServerAPI = () => {
    fetch("http://localhost:3001/cart")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          cart: jsonHasilAmbilDariAPI,
        });
      });
  };
  componentDidMount() {
    this.ambilDataDariServerAPI();
  }
  handleHapusItem = (data) => {
    fetch(`http://localhost:3001/cart/${data}`, { method: "DELETE" }).then(
      (res) => {
        this.ambilDataDariServerAPI();
      }
    );
  };
  render() {
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Id Produk</th>
              <th className="text-center">Nama Barang</th>
              <th className="text-center">Harga</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Subtotal</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cart.map((keranjang) => {
              return (
                <Post
                  key={keranjang.id}
                  id={this.index++}
                  idproduk={keranjang.id}
                  nama={keranjang.nama}
                  harga={keranjang.harga}
                  qty={keranjang.qty}
                  hapusItem={() => this.handleHapusItem(keranjang.id)}
                />
              );
            })}
            <tr>
              <th colSpan="5" className="text-right">
                Total :{" "}
              </th>
              <Jumlah produk={this.state.cart} />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
const Jumlah = ({ produk }) => (
  <th>
    <NumberFormat
      value={produk.reduce((sum, i) => (sum += i.harga * i.qty), 0)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={" Rp "}
    ></NumberFormat>
  </th>
);

export default Cart;
