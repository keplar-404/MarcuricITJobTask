import { Card, Col, Form, Row } from "react-bootstrap";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";
import {
  formatDateArrayToRanges,
  getCurrentDate,
  getCurrentMonth,
  getCurrentYear,
  getLastMonth,
  getLastSevenDays,
  getLastThirtyDays,
  getLastYear,
  getYesterdayDate,
} from "../utils/Date";
import { useState } from "react";

import "./style.css";
import { records } from "../data/TableFakeListData";

let date = "all";
let status = "all";
let barcode = "all";
export default function Filter({ setListData }: { setListData: any }) {
  const [_date, setDate] = useState("Date");
  const [showModal, setShowModal] = useState(false);

  // @ts-ignore
  const filterData = (records, date, status, barcode) => {
    let data = [];

    if (date === "all") {
      data = records;
    } else {
      const [startDateString, endDateString] = date.split(" - ");
      const startDateParts = startDateString.split("/");
      const endDateParts = endDateString.split("/");

      const startDate = new Date(
        startDateParts[2],
        startDateParts[1] - 1,
        startDateParts[0]
      );
      const endDate = new Date(
        endDateParts[2],
        endDateParts[1] - 1,
        endDateParts[0]
      );

      // @ts-ignore
      data = records.filter((record) => {
        const recordDateParts = record.Date.split(" ")[0].split("-");
        const recordDate = new Date(
          recordDateParts[2],
          recordDateParts[1] - 1,
          recordDateParts[0]
        );

        return recordDate >= startDate && recordDate <= endDate;
      });
    }

    if (status !== "all") {
      data = data.filter((record: any) => record.statusText === status);
    }

    if (barcode !== "all") {
      data = data.filter((record: any) => record.Barcode == barcode);
    }

    setListData(data);

    return data;
  };

console.log(filterData)

  const handleDateChange = (text: string, date?: string) => {
    if (text === "Today") {
      const result = getCurrentDate();
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "Yesterday") {
      const result = getYesterdayDate();
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "Last 7 Days") {
      const result = getLastSevenDays();

      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "Last 30 Days") {
      const result = getLastThirtyDays();

      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "This Month") {
      const result = getCurrentMonth();
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "Last Month") {
      const result = getLastMonth();
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "This Year") {
      const result = getCurrentYear();
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    } else if (text === "Last Year") {
      const result = getLastYear();
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);

      return;
    } else if (text === "range") {
      // @ts-ignore
      const result = formatDateArrayToRanges(date);
      // @ts-ignore
      setDate(result);
      filterData(records, result, status, barcode);
      setShowModal(false);
      return;
    }
  };
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-4">Filter</h4>

        <Row>
          <Col>
            <Form.Label column htmlFor="simpleinput">
              Date
            </Form.Label>

            <div style={{ position: "relative" }}>
              <Form.Control
                type="text"
                id="date"
                placeholder="Date"
                value={_date}
                onClick={() => setShowModal(true)}
              />

              {showModal && (
                <div
                  className="p-2 gap-2 bg-white shadow-lg"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    zIndex: 1,
                  }}
                >
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("Today")}
                  >
                    Today
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("Yesterday")}
                  >
                    Yesterday
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("Last 7 Days")}
                  >
                    Last 7 Days
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("Last 30 Days")}
                  >
                    Last 30 Days
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("This Month")}
                  >
                    This Month
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("Last Month")}
                  >
                    Last Month
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("This Year")}
                  >
                    This Year
                  </button>
                  <button
                    className="px-2 py-1 date_btn_select"
                    onClick={() => handleDateChange("Last Year")}
                  >
                    Last Year
                  </button>
                  <DateRangePicker
                    placeholder="Select Date Range"
                    format="dd-MM-yyyy"
                    // @ts-ignore
                    onChange={(value) => handleDateChange("range", value)}
                    placement="right"
                    ranges={[]}
                  />
                </div>
              )}
            </div>
          </Col>
          <Col>
            <Form.Label column>Status</Form.Label>

            <Form.Select
              onChange={(event) => {
                status = event.currentTarget.value;
                filterData(records, _date, status, barcode);
              }}
            >
              <option disabled></option>
              <option value={"all"}>All</option>
              <option value={"Done"}>Done</option>
              <option value={"Pending"}>Pending</option>
            </Form.Select>
          </Col>
          <Col>
            {/* @ts-ignore */}
            <Form.Label column htmlFor="Barcode">
              Barcode
            </Form.Label>
            <Form.Control
              type="text"
              id="Barcode"
              placeholder="Barcode"
              onChange={(e) => {
                barcode = e.target.value;
                if (barcode === "") barcode = "all";
                filterData(records, _date, status, barcode);
              }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
