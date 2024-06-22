"use client";

import {
  ClearOutlined,
  CompressOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Segmented, Space, Table } from "antd";
import { useMemo, useState } from "react";

import Empty from "@/components/Empty";
import ToolModule from "@/components/ToolModule";
// import Icon from '@/components/Icon';
import { useWindowSize } from "@/hooks";
import { formatFileSize } from "@/utils";
import { TOOLS_KEY_ENUM } from "@/types";
// import Events from '@/utils/events';
// import { IImageCompressInfo } from '../../../main/modules/image';

import "./index.css";

const IMAGES_DATA_KEY = "originalFilePath";
const IMAGES_COMPRESS_KEY = "images_compress";
const TABLE_HEIGHT_PADDING = 220;

const ImageCompress = () => {
  // const { data: localData, setData: setLocalData } = useLocalData();
  // const images = localData[IMAGES_COMPRESS_KEY] || [];
  const images: any[] = [];
  const [compressLoading, setCompressLoading] = useState<boolean>(false);
  const [quality, setQuality] = useState<number>(80);

  const handleUploadImages = async () => {
    // const result = await Events.uploadImages({
    //   filters: [{ name: '图片选择', extensions: ['*.png', '*.jpg', '*.jpeg', '*.webp'] }],
    // });
    // if (result) {
    //   const newImages = arrayObjDeWightByKey([...images, ...result], IMAGES_DATA_KEY); // 基于 originalFilePath 去重
    //   setLocalData({ [IMAGES_COMPRESS_KEY]: newImages });
    // }
  };

  const handleCompress = async () => {
    setCompressLoading(true);
    // const result = await Events.imageCompress({
    //   data: images,
    //   quality: quality,
    // });
    // // @ts-ignore
    // if (result) setLocalData({ [IMAGES_COMPRESS_KEY]: result });
    setCompressLoading(false);
  };

  const handleShowItem = async (filePath: string) => {
    // await Events.showItemInFolder({ path: filePath });
  };

  const handleClearImage = (originalFilePath: string) => {
    // setLocalData({
    //   [IMAGES_COMPRESS_KEY]: images.filter((v: IImageCompressInfo) => v.originalFilePath !== originalFilePath),
    // });
  };

  // 清理列表
  const handleClear = () => {
    // setLocalData({ [IMAGES_COMPRESS_KEY]: [] });
  };

  const columns = [
    {
      title: "文件名称",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "原文件大小",
      dataIndex: "originalFileSize",
      key: "originalFileSize",
      width: "12%",
      render: (value: number) => {
        return <div>{formatFileSize(value)}</div>;
      },
    },
    {
      title: "压缩后大小",
      dataIndex: "compreeedFileSize",
      key: "compreeedFileSize",
      width: "12%",
      render: (value: number) => {
        return <div>{value ? formatFileSize(value) : "_"}</div>;
      },
    },
    {
      title: "压缩率",
      dataIndex: "compressedRatio",
      key: "compressedRatio",
      width: "12%",
      render: (value: number) => {
        return <div>{value ? `${value}%` : "_"}</div>;
      },
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      width: "18%",
      render: (value: string) => {
        return (
          <div>
            {compressLoading && value === "pending" ? "压缩中..." : value}
          </div>
        );
      },
    },
    {
      title: "操作",
      key: "options",
      width: 100,
      render: () => {
        return (
          <Space>
            ssdd
            {/* <Icon
              type="icon-wenjianjia"
              onClick={() => handleShowItem(data.compreeedFilePath || data.originalFilePath)}
            />
            <Icon type="icon-guanbi" onClick={() => handleClearImage(data.originalFilePath)} /> */}
          </Space>
        );
      },
    },
  ];

  return (
    <div className={"tools-image-compress"}>
      {/* Empty 高度为了撑开表格  */}
      <ConfigProvider renderEmpty={() => <Empty description="暂无数据" />}>
        <Table
          style={{ height: "calc(100vh - 300px)" }}
          rowKey={IMAGES_DATA_KEY}
          pagination={false}
          // scroll={{ y: tableHeight - 60 }}
          columns={columns}
          dataSource={[]}
        />
      </ConfigProvider>
      <div className={"tools-image-compress-footer"}>
        <Space>
          <div>
            压缩质量：
            <Segmented
              value={quality}
              onChange={(v) => setQuality(v as number)}
              options={[
                { label: "高", value: 80 },
                { label: "中", value: 50 },
                { label: "低", value: 30 },
              ]}
            />
          </div>
        </Space>

        <Space>
          <Button
            size="large"
            icon={<UploadOutlined />}
            onClick={handleUploadImages}
          >
            上传图片
          </Button>
          <Button
            size="large"
            type="primary"
            icon={<CompressOutlined />}
            onClick={handleCompress}
          >
            开始压缩
          </Button>
          <Button size="large" icon={<ClearOutlined />} onClick={handleClear}>
            清理列表
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ToolModule(ImageCompress, TOOLS_KEY_ENUM.ImageCompress);
