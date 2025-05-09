import {
  Card,
  Menu,
  Layout,
  DatePicker,
  Select,
  Checkbox,
  Button,
  Space,
  Tabs,
} from "antd";
import {
  FileExcelOutlined,
  FilePdfOutlined,
  PrinterOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import ReportViewer from "../components/ReportViewer";
import dayjs from "dayjs";

const { Sider, Content } = Layout;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

export default function ReportDashboard() {
  const reportTypesSales = [
    { key: "products", label: "Products" },
    { key: "product-groups", label: "Product groups" },
    { key: "customers", label: "Customers" },
    { key: "tax-rates", label: "Tax rates" },
    { key: "users", label: "Users" },
    { key: "item-list", label: "Item list" },
    { key: "payment-types", label: "Payment types" },
    { key: "refunds", label: "Refunds" },
    { key: "invoice-list", label: "Invoice list" },
    { key: "daily-sales", label: "Daily sales" },
    { key: "hourly-sales", label: "Hourly sales" },
    { key: "profit-margin", label: "Profit & margin" },
    { key: "unpaid-sales", label: "Unpaid sales" },
    { key: "voided-items", label: "Voided items" },
    { key: "discounts", label: "Discounts granted" },
  ];

  const reportTypesPurchases = [
    { key: "purchase-products", label: "Products" },
    { key: "purchase-product-groups", label: "Product groups" },
    { key: "purchase-suppliers", label: "Suppliers" },
    { key: "purchase-tax-rates", label: "Tax rates" },
    { key: "purchase-users", label: "Users" },
    { key: "purchase-item-list", label: "Item list" },
    { key: "purchase-payment-types", label: "Payment types" },
    { key: "purchase-refunds", label: "Refunds" },
    { key: "purchase-invoice-list", label: "Invoice list" },
    { key: "purchase-daily-purchases", label: "Daily purchases" },
    { key: "purchase-hourly-purchases", label: "Hourly purchases" },
    { key: "purchase-profit-margin", label: "Profit & margin" },
    { key: "purchase-unpaid-purchases", label: "Unpaid purchases" },
    { key: "purchase-voided-items", label: "Voided items" },
    { key: "purchase-discounts", label: "Discounts granted" },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Sider
        width={250}
        theme="light"
        style={{
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ padding: "16px", fontSize: "16px", fontWeight: "900" , textTransform: "uppercase"}}>
          Select report to view
        </div>
        <Menu
          mode="vertical"
          defaultSelectedKeys={["products"]}
          style={{ borderRight: 0 }}
        >
          <Menu.SubMenu key="sales" title="Sales">
            {reportTypesSales.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.SubMenu key="purchases" title="Purchases">
            {reportTypesPurchases.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu.SubMenu>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ margin: "16px" }}>
          <Card
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ marginBottom: "16px" }}>Filter</h3>

              <Space size="large" wrap>
                <div>
                  <label style={{ fontSize: "14px" }}>
                    Customers & Suppliers
                  </label>
                  <Select
                    style={{ width: 200, padding: "0 10px" }}
                    placeholder="Customers & suppliers"
                    defaultValue="All"
                  >
                    <Option value="All">All</Option>
                    {/* Add more options */}
                  </Select>

                  <label style={{ fontSize: "14px" }}>Users</label>
                  <Select
                    style={{ width: 200, padding: "0 10px" }}
                    placeholder="User"
                    defaultValue="All"
                  >
                    <Option value="All">All</Option>
                    {/* Add more options */}
                  </Select>
                </div>
                <div>
                  <label style={{ fontSize: "14px" }}>Product Type</label>
                  <Select
                    style={{ width: 200, padding: "0 10px" }}
                    placeholder="Product"
                    defaultValue="All"
                  >
                    <Option value="All">All</Option>
                    {/* Add more options */}
                  </Select>

                  <label style={{ fontSize: "14px" }}>Product Group</label>
                  <Select
                    style={{ width: 200, padding: "0 10px" }}
                    placeholder="Product group"
                    defaultValue="Products"
                  >
                    <Option value="Products">Products</Option>
                    {/* Add more options */}
                  </Select>
                </div>
              </Space>

              <div style={{ marginTop: "16px" }}>
                <Checkbox defaultChecked>Include subgroups</Checkbox>
              </div>

              <div style={{ margin: "16px 0" }}>
                <label style={{ fontSize: "14px", padding: "0 10px" }}>
                  Date Range
                </label>
                <RangePicker
                  style={{ width: "100%", maxWidth: "400px" }}
                  ranges={{
                    Today: [dayjs(), dayjs()],
                    "This Week": [
                      dayjs().startOf("week"),
                      dayjs().endOf("week"),
                    ],
                    "This Month": [
                      dayjs().startOf("month"),
                      dayjs().endOf("month"),
                    ],
                    "Last Month": [
                      dayjs().subtract(1, "month").startOf("month"),
                      dayjs().subtract(1, "month").endOf("month"),
                    ],
                    "This Year": [
                      dayjs().startOf("year"),
                      dayjs().endOf("year"),
                    ],
                    "Last Year": [
                      dayjs().subtract(1, "year").startOf("year"),
                      dayjs().subtract(1, "year").endOf("year"),
                    ],
                  }}
                />
              </div>

              <Space>
                <Button type="primary" icon={<FilterOutlined />}>
                  Show report
                </Button>
                <Button icon={<PrinterOutlined />}>Print</Button>
                <Button icon={<FileExcelOutlined />}>Excel</Button>
                <Button icon={<FilePdfOutlined />}>PDF</Button>
              </Space>
            </div>

            <Tabs type="card">
              <TabPane tab="Sales Report" key="1">
                <ReportViewer />
              </TabPane>
              {/* Add more tabs as needed */}
            </Tabs>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
