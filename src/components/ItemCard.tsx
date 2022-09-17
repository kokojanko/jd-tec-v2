import { IProduct } from "../models";
import React, { useState } from 'react';
import { Card, Image, Text, Badge, Button, Group, Drawer, Modal } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import ReactPlayer from 'react-player'

interface PropsPrudoct {
  products: IProduct;
}

function ItemOne({ products }: PropsPrudoct) {

  const [opened, setOpened] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={products.imageOne} height={"16em"} alt="Тут должна быть картинка, но что то пошло не так" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={"100%"} sx={{ height: "1.3em", overflow: "hidden" }}>
            {products.title}
          </Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text
          size="sm"
          color="dimmed"
          sx={{ height: "5.5em", overflow: "hidden" }}
        >
          {products.littleDescription}
        </Text>
        <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={products.title}
        padding="xl"
        size={"50%"}
        position="bottom"
        aria-labelledby="drawer-title"
        aria-describedby="drawer-body"
        closeButtonLabel="Close drawer"
      >
        <div className="CarouselInDrawer">
        <Carousel sx={{ width: "100%", height: "100% " }} mx="auto" withIndicators height="100%">
            <Carousel.Slide><img src={products.imageOne} width="100%" height="100%"/></Carousel.Slide>
            <Carousel.Slide><img src={products.imageTwo} width="100%" height="100%"/></Carousel.Slide>
            <Carousel.Slide><img src={products.imageTree} width="100%" height="100%"/></Carousel.Slide>
            <Carousel.Slide><ReactPlayer url={products.video} width="100%" height="100%"/></Carousel.Slide>
          </Carousel>
        </div>
        <div className="DiscInDrawer">
          <div className="HiddenDiscInDrawer">
            {products.discription}
          </div>
          <Modal
            opened={openModal}
            onClose={() => setOpenModal(false)}
            title={"Oписание продукта: " + products.title}
            size="lg"
          >
            {products.discription}
          </Modal>

          <Group position="center">
            <Button onClick={() => setOpenModal(true)} className="ButtonToShowMoreDisc">
              Показать всё описание
            </Button>
          </Group>
        </div>
        <div className="WhereToBuy">
            <p>Товар можно купить на озоне:</p>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} component="a" href={products.ozonLink}>Ozon</Button>
            <p>Или Яндекс Маркете:</p>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} component="a" href="">Яндекс Маркет</Button>
        </div>
      </Drawer>

      <Group position="center">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => setOpened(true)}>Подробнее</Button>
      </Group>
      </Card>
    </div>
  );
}

export default ItemOne;
