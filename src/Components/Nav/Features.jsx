import React, { Component } from "react";
import Post from "../Post/Post";

class Features extends Component {
  state = {
    listKulkas: [],
  };
  ambilDataProduk = () => {
    fetch("http://localhost:3000/Kulkas")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listKulkas: jsonHasilAmbilDariAPI,
        });
      });
  };
  componentDidMount() {
    this.ambilDataProduk();
  }
  handleGetDataKulkas = (data) => {
    fetch(`http://localhost:3000/Kulkas/${data}`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        var dataKulkas = { ...this.state.inserCart };
        dataKulkas["id"] = res["id"];
        dataKulkas["nama"] = res["nama"];
        dataKulkas["harga"] = res["harga"];
        dataKulkas["stok"] = res["stok"];
        dataKulkas["qty"] = 1;
        this.setState({
          insertCart: dataKulkas,
        });
      })
      .then(() => {
        this.handleCart(data);
      })
      .then(() => {
        this.handleUpdateStok(data);
      })
      .then(() => {
        this.handleTombolSimpan();
      });
  };
  handleCart = (data) => {
    fetch(`http://localhost:3001/cart/${data}`, { method: "GET" }).then(
      (response) => {
        if (response.ok) {
          response.json().then((res) => {
            this.handleUpdateCart(data, res);
            this.ambilDataProduk();
          });
        } else {
          this.handleTombolSimpan();
        }
      }
    );
  };
  handleUpdateStok = (data) => {
    fetch(`http://localhost:3000/Kulkas/${data}`, { method: "GET" }).then(
      (response) => {
        response.json().then((res) => {
          fetch(`http://localhost:3021/Kulkas/${data}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: res["id"],
              gambar: res["gambar"],
              nama: res["nama"],
              harga: res["harga"],
              stok: res["stok"] - 1,
            }),
          });
          this.ambilDataProduk();
        });
      }
    );
  };
  handleUpdateCart = (data, res) => {
    fetch(`http://localhost:3001/cart/${data}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: res["id"],
        nama: res["nama"],
        harga: res["harga"],
        stok: res["stok"],
        qty: res["qty"] + 1,
      }),
    });
  };
  handleTombolSimpan = () => {
    fetch("http://localhost:3001/cart", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.insertCart),
    }).then((Response) => {
      this.ambilDataProduk();
    });
  };
  render() {
    return (
      <div>
        {this.state.listKulkas.map((produk) => {
          return (
            <Post
              key={produk.id}
              id={produk.id}
              gambar={produk.gambar}
              nama={produk.nama}
              harga={produk.harga}
              stok={produk.stok}
              beli={this.handleGetDataKulkas}
            />
          );
        })}
      </div>
    );
  }
}

export default Features;
