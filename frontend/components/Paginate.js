import React from "react";
import { Pagination } from "react-bootstrap";
import Link from "next/link";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {

  const checkIsAdmin = (x) => {
    if (isAdmin) {
      return keyword ? `/admin/productlist?keyword=${keyword}&page=${x + 1}` : `/admin/productlist?page=${x + 1}`;
    } else {
      return keyword ? `/?keyword=${keyword}&page=${x + 1}` : `/?page=${x + 1}`;
    }
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link key={x + 1} href={checkIsAdmin(x)} passHref>
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </Link>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
