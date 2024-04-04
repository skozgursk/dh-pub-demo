import { ComponentType } from "react";
import { NonIndexRouteObject, createBrowserRouter } from "react-router-dom";
import { AnaSayfa, CozucuApp, DenemeSinavlari, Dersler, Istatistik, OlcmeDegerlendirme, RehberlikVideolari, SoruBankasi } from "../assets";
import { Layout } from "../components";
import { Home, Question } from "./../pages";

export interface MenuItem extends NonIndexRouteObject {
  icon?: ComponentType
  title: string,
  children?: Array<MenuItem>
}

export const MenuPages: Array<MenuItem> = [
  {
    id: "pages",
    path: "",
    Component: Layout,
    title: '',
    children: [
      {
        id: 'question',
        path: '/',
        icon: AnaSayfa,
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'dersler',
        path: 'question/1',
        icon: Dersler,
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'SoruBankasi',
        path: 'SoruBankasi',
        icon: SoruBankasi,
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'DenemeSinavlari',
        path: 'DenemeSinavlari/:id',
        icon: DenemeSinavlari,
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'RehberlikVideolari',
        path: 'RehberlikVideolari/:id',
        icon: RehberlikVideolari,
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'Istatistik',
        path: 'Istatistik/:id',
        icon: Istatistik,
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'OlcmeDegerlendirme',
        path: 'OlcmeDegerlendirme/:id',
        icon: OlcmeDegerlendirme,
        title: 'Ana Sayfa',
        Component: Question,
      },
    ],
  },
  {
    id: "apps",
    path: "/apps",
    Component: Layout,
    title: '',
    children: [
      {
        id: 'CozucuApp',
        path: 'CozucuApp/:id',
        icon: CozucuApp,
        title: 'Ana Sayfa',
      },
      {
        id: 'SimdiAnladimApp',
        path: 'SimdiAnladimApp/:id',
        icon: CozucuApp, //icon svg is broken replaced with this
        title: 'Ana Sayfa',
        Component: Question,
      },
      {
        id: 'KocumYanimdaApp',
        path: 'KocumYanimdaApp/:id',//icon svg is broken replaced with this
        icon: CozucuApp,
        title: 'Ana Sayfa',
        Component: Question,
      },
    ],
  }
]

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        id: 'home',
        path: '/',
        Component: Home,
      },
      {
        id: 'question',
        path: 'question/:id',
        Component: Question,
      },
    ]
  }
]);