use client

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "hero", url: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { id: "team", url: "https://images.pexels.com/photos/6937428/pexels-photo-6937428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Chefs enjoying their work in a busy restaurant kitchen, highlighting teamwork and culinary passion." },
  { id: "menu", url: "https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter." },
  { id: "contact", url: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A businessman sits at a desk using multiple computers and a headset in a well-lit modern office." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"text-stagger"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"rounded"}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Delicious Pizza for Every Occasion"
            description="Authentic flavors crafted with love"
            imageSrc={assetMap.find(a => a.id === 'hero')?.url}
            buttons={[
              { text: "Order Now", href: "menu" },
              { text: "See Our Menu", href: "menu" },
            ]}
            className="bg-red-100"
            titleClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our Story: From Passionate Beginnings to Culinary Masters"
            className="bg-red-100 text-gray-800"
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "Classic", name: "Margherita Pizza", price: "$12.00", rating: 5, reviewCount: "120", imageSrc: assetMap.find(a => a.id === 'menu')?.url },
              { id: "2", brand: "Special", name: "Pepperoni Pizza", price: "$14.00", rating: 4, reviewCount: "200", imageSrc: assetMap.find(a => a.id === 'menu')?.url },
              { id: "3", brand: "Signature", name: "Veggie Delight", price: "$13.00", rating: 5, reviewCount: "150", imageSrc: assetMap.find(a => a.id === 'menu')?.url },
            ]}
            className="bg-red-100"
            cardNameClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Get in Touch with Us"
            description="We'd love to hear from you!"
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            imageSrc={assetMap.find(a => a.id === 'contact')?.url}
            className="bg-red-100"
            titleClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Menu", items: [
                { label: "Pizza", href: "menu" },
                { label: "Beverages", href: "menu" },
              ]},
              { title: "Company", items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
              ]},
            ]}
            className="bg-red-100 text-gray-800"
            copyrightText="© 2023 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
