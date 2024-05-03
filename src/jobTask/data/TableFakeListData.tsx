import classNames from "classnames";
import FeatherIcons from "feather-icons-react";
import { FormInput } from "../../components";
import { Records, Report, Tests, Branche, PriceList } from "../utils/type";

export const records: Records[] = [
  {
    id: 1,
    year: 2028,
    Barcode: 655508514108,
    Client_Code: 1603835870,
    Client_Name: "david alex",
    Subtotal: "73 USD",
    Discount: "0 USD",
    Total: "12 USD",
    Paid: "0 USD",
    Due: "73 USD",
    Date: "24-04-2024 14:34",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 2,
    year: 2029,
    Barcode: 655508514109,
    Client_Code: 1603835871,
    Client_Name: "john smith",
    Subtotal: "50 USD",
    Discount: "5 USD",
    Total: "45 USD",
    Paid: "20 USD",
    Due: "25 USD",
    Date: "25-04-2024 10:00",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 3,
    year: 2027,
    Barcode: 655508514110,
    Client_Code: 1603835872,
    Client_Name: "alice johnson",
    Subtotal: "100 USD",
    Discount: "10 USD",
    Total: "90 USD",
    Paid: "90 USD",
    Due: "0 USD",
    Date: "26-04-2024 09:15",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 4,
    year: 2026,
    Barcode: 655508514111,
    Client_Code: 1603835873,
    Client_Name: "emily brown",
    Subtotal: "120 USD",
    Discount: "15 USD",
    Total: "105 USD",
    Paid: "50 USD",
    Due: "55 USD",
    Date: "27-04-2024 13:45",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 5,
    year: 2025,
    Barcode: 655508514112,
    Client_Code: 1603835874,
    Client_Name: "sarah parker",
    Subtotal: "80 USD",
    Discount: "8 USD",
    Total: "72 USD",
    Paid: "30 USD",
    Due: "42 USD",
    Date: "28-04-2024 16:20",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 6,
    year: 2024,
    Barcode: 655508514113,
    Client_Code: 1603835875,
    Client_Name: "michael miller",
    Subtotal: "150 USD",
    Discount: "20 USD",
    Total: "130 USD",
    Paid: "100 USD",
    Due: "30 USD",
    Date: "29-04-2024 11:55",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 7,
    year: 2023,
    Barcode: 655508514114,
    Client_Code: 1603835876,
    Client_Name: "emma white",
    Subtotal: "200 USD",
    Discount: "25 USD",
    Total: "175 USD",
    Paid: "175 USD",
    Due: "0 USD",
    Date: "30-04-2024 08:30",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 8,
    year: 2022,
    Barcode: 655508514115,
    Client_Code: 1603835877,
    Client_Name: "james thompson",
    Subtotal: "90 USD",
    Discount: "7 USD",
    Total: "83 USD",
    Paid: "50 USD",
    Due: "33 USD",
    Date: "01-05-2024 12:10",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 9,
    year: 2021,
    Barcode: 655508514116,
    Client_Code: 1603835878,
    Client_Name: "olivia martinez",
    Subtotal: "110 USD",
    Discount: "10 USD",
    Total: "100 USD",
    Paid: "90 USD",
    Due: "10 USD",
    Date: "02-05-2024 15:45",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 10,
    year: 2020,
    Barcode: 655508514117,
    Client_Code: 1603835879,
    Client_Name: "noah lee",
    Subtotal: "130 USD",
    Discount: "15 USD",
    Total: "115 USD",
    Paid: "100 USD",
    Due: "15 USD",
    Date: "03-05-2024 09:20",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 11,
    year: 2019,
    Barcode: 655508514118,
    Client_Code: 1603835880,
    Client_Name: "ava adams",
    Subtotal: "160 USD",
    Discount: "20 USD",
    Total: "140 USD",
    Paid: "120 USD",
    Due: "20 USD",
    Date: "04-05-2024 14:00",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 12,
    year: 2018,
    Barcode: 655508514119,
    Client_Code: 1603835881,
    Client_Name: "logan brown",
    Subtotal: "70 USD",
    Discount: "5 USD",
    Total: "65 USD",
    Paid: "65 USD",
    Due: "0 USD",
    Date: "05-05-2024 08:55",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 13,
    year: 2017,
    Barcode: 655508514120,
    Client_Code: 1603835882,
    Client_Name: "mia clark",
    Subtotal: "180 USD",
    Discount: "15 USD",
    Total: "165 USD",
    Paid: "100 USD",
    Due: "65 USD",
    Date: "06-05-2024 12:45",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 14,
    year: 2016,
    Barcode: 655508514121,
    Client_Code: 1603835883,
    Client_Name: "lucas green",
    Subtotal: "95 USD",
    Discount: "10 USD",
    Total: "85 USD",
    Paid: "50 USD",
    Due: "35 USD",
    Date: "07-05-2024 17:30",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 15,
    year: 2015,
    Barcode: 655508514122,
    Client_Code: 1603835884,
    Client_Name: "harper cooper",
    Subtotal: "200 USD",
    Discount: "20 USD",
    Total: "180 USD",
    Paid: "180 USD",
    Due: "0 USD",
    Date: "08-05-2024 11:20",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 16,
    year: 2014,
    Barcode: 655508514123,
    Client_Code: 1603835885,
    Client_Name: "amelia taylor",
    Subtotal: "120 USD",
    Discount: "15 USD",
    Total: "105 USD",
    Paid: "100 USD",
    Due: "5 USD",
    Date: "09-05-2024 09:00",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 17,
    year: 2013,
    Barcode: 655508514124,
    Client_Code: 1603835886,
    Client_Name: "evelyn wilson",
    Subtotal: "140 USD",
    Discount: "10 USD",
    Total: "130 USD",
    Paid: "120 USD",
    Due: "10 USD",
    Date: "10-05-2024 14:45",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 18,
    year: 2012,
    Barcode: 655508514125,
    Client_Code: 1603835887,
    Client_Name: "benjamin harris",
    Subtotal: "180 USD",
    Discount: "20 USD",
    Total: "160 USD",
    Paid: "160 USD",
    Due: "0 USD",
    Date: "11-05-2024 09:30",
    Status: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 19,
    year: 2011,
    Barcode: 655508514126,
    Client_Code: 1603835888,
    Client_Name: "oliver jackson",
    Subtotal: "100 USD",
    Discount: "5 USD",
    Total: "95 USD",
    Paid: "90 USD",
    Due: "5 USD",
    Date: "12-05-2024 13:15",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 20,
    year: 2010,
    Barcode: 655508514127,
    Client_Code: 1603835889,
    Client_Name: "scarlett martin",
    Subtotal: "200 USD",
    Discount: "25 USD",
    Total: "175 USD",
    Paid: "175 USD",
    Due: "0 USD",
    Date: "13-05-2024 08:00",
    Status: (
      <FeatherIcons
        icon={"check-circle"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
];

export const tests: Tests[] = [
  {
    id: 1,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "fas01",
    Price: "100 USD",
  },
  {
    id: 2,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 2",
    Price: "10 USD",
  },
  {
    id: 3,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 3",
    Price: "120 USD",
  },
  {
    id: 4,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 4",
    Price: "0 USD",
  },
  {
    id: 5,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 5",
    Price: "70 USD",
  },
  {
    id: 6,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 6",
    Price: "820 USD",
  },
  {
    id: 7,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 7",
    Price: "580 USD",
  },
  {
    id: 8,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 8",
    Price: "90 USD",
  },
  {
    id: 9,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 9",
    Price: "70 USD",
  },
  {
    id: 10,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 10",
    Price: "80 USD",
  },
  {
    id: 11,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 10",
    Price: "540 USD",
  },
  {
    id: 12,
    checkbox: <FormInput type="checkbox" name="checkbox" />,
    Test_Name: "Test 10",
    Price: "0250 USD",
  },
];

export const reports: Report[] = [
  {
    id: 1,
    year: 2028,
    Barcode: 655508514108,
    Client_Code: 1603835870,
    Client_Name: "david alex",
    Gender: "Male",
    Age: "25",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 2,
    year: 2029,
    Barcode: 655508514109,
    Client_Code: 1603835871,
    Client_Name: "john doe",
    Gender: "Male",
    Age: "24",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 3,
    year: 2027,
    Barcode: 655508514110,
    Client_Code: 1603835872,
    Client_Name: "alice johnson",
    Gender: "Male",
    Age: "55",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 4,
    year: 2028,
    Barcode: 655508514108,
    Client_Code: 1603835870,
    Client_Name: "david alex",
    Gender: "Male",
    Age: "75",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 5,
    year: 2029,
    Barcode: 655508514109,
    Client_Code: 1603835871,
    Client_Name: "john doe",
    Gender: "Male",
    Age: "25",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 6,
    year: 2027,
    Barcode: 655508514110,
    Client_Code: 1603835872,
    Client_Name: "alice johnson",
    Gender: "Male",
    Age: "45",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
  {
    id: 7,
    year: 2028,
    Barcode: 655508514108,
    Client_Code: 1603835870,
    Client_Name: "david alex",
    Gender: "Male",
    Age: "35",
    Phone: "1234567890",
    Tests: "Test 1, Test 2",
    Date: "24-04-2024 14:34",
    Done: (
      <FeatherIcons
        icon={"check"}
        className={classNames("icon-sm", "icon-dual-success")}
      />
    ),
    Signed: (
      <FeatherIcons
        icon={"slash"}
        className={classNames("icon-sm", "icon-dual-error")}
      />
    ),
    Action: (
      <FeatherIcons
        icon={"settings"}
        className={classNames("icon-sm", "icon-dual-primary")}
      />
    ),
  },
];

export const priceListTest: PriceList[] = [
  {
    Test: "Test 1",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Test 2",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Test 3",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Test 4",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Test 5",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Test 6",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Test 7",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
];
export const priceListCulture: PriceList[] = [
  {
    Test: "Culture 1",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Culture 2",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Culture 3",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Culture 4",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Culture 5",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Culture 6",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
  {
    Test: "Culture 7",
    Price: (
      <input
        type="number"
        className="p-2 h-[18px]"
        defaultValue={20}
        style={{ width: "100%" }}
      />
    ),
    Currency: "USD",
  },
];
