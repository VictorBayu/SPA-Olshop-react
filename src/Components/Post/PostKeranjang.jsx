import React from "react";
import { Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = (Victor) => {
  return (
    <tr>
      <td className="text-center">{Victor.id}.</td>
      <td className="text-center">{Victor.idproduk}</td>
      <td>{Victor.nama}</td>
      <td>
        <NumberFormat
          value={Victor.harga}
          displayType={"text"}
          thousandSeparator={true}
          prefix={" Rp "}
        />
      </td>
      <td className="text-center">{Victor.qty}</td>
      <td>
        <NumberFormat
          value={Victor.harga * Victor.qty}
          displayType={"text"}
          thousandSeparator={true}
          prefix={" Rp "}
        />
      </td>
      <td>
        <Button variant="danger" onClick={Victor.hapusItem}>
          Remove
        </Button>
      </td>
    </tr>
  );
};
export default Post;
