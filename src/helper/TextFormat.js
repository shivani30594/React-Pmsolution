import React from "react";
import moment from "moment";

/**
 *
 * @param {Date}   date
 * @param {String} format
 */
export const formatDate = (date = "", format = "") =>
  moment(date).format(format);

export const DateFormat = ({ date, format }) => (
  <span>{formatDate(date, format)}</span>
);
