/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../css/Post.css";
import { Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

const Post = (Victor) => {
  return (
    <div className="row konten">
      <div className="col-4">
        <img className="gambar" src={Victor.gambar} />
      </div>
      <div className="col-8">
        <div className="row detail">
          <div className="col-8">
            <div className="row">
              <label className="col-sm-3">Id Produk :</label>
              <label className="col-sm-9">{Victor.id}</label>
            </div>
            <div className="row">
              <label className="col-sm-3">Nama :</label>
              <label className="col-sm-9">{Victor.nama}</label>
            </div>
            <div className="row">
              <label className="col-sm-3">Harga :</label>
              <div className="col-sm-9">
                <NumberFormat
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp "}
                  value={Victor.harga}
                />
              </div>
            </div>
            <div className="row">
              <label className="col-sm-3">Stok : </label>
              <label className="col-sm-9">{Victor.stok}</label>
            </div>
          </div>
          <div className="col-4">
            <div className="row tombol">
              <Button
                variant="outline-info"
                onClick={Victor.beli.bind(this, Victor.id)}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        {/* <p className="id">Id Produk : {Victor.id}</p>
        <p className="namaProduk">Nama Barang : {Victor.nama}</p>
        <p className="hargaproduk">Harga : Rp {Victor.harga}</p>
        <p className="stok">Stok : {Victor.stok}</p> */}
      </div>
    </div>
  );
};
export default Post;
