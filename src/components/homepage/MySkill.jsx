import React from "react";
import SkillCard from "./SkillCard";
import {
  AngularSvg,
  BootstrapSvg,
  DockerSvg,
  ExpressSvg,
  FlaskSvg,
  GitSvg,
  GolangSvg,
  HtmlSvg,
  JavaScriptSvg,
  KubenetesSvg,
  MongoDBSvg,
  MySQLSvg,
  NestjsSvg,
  NodeSvg,
  NumpySvg,
  PandasSvg,
  PowerBISvg,
  PrismaSvg,
  PythonSvg,
  ReactSvg,
  TypeScriptSvg,
} from "./Svgcollection";

const MySkill = (props) => {
  return (
    <section className="my-skill-section">
      <div className="my-skill">
        <div className="my-skill__title">
          <h1 className="heading-2">Things That I Familiar To ...</h1>
        </div>

        <div className="my-skill__content">
          <SkillCard icon={<HtmlSvg />} title="HTML&CSS,SCSS" />
          <SkillCard icon={<JavaScriptSvg />} title="JavaScript" />
          <SkillCard icon={<TypeScriptSvg />} title="TypeScript" />
          <SkillCard icon={<PythonSvg />} title="Python" />
          <SkillCard icon={<BootstrapSvg />} title="Bootstrap" />
          <SkillCard icon={<ReactSvg />} title="React & Redux" />
          <SkillCard icon={<AngularSvg />} title="Angular & NgRx" />
          <SkillCard icon={<FlaskSvg />} title="Flask" />
          <SkillCard icon={<NodeSvg />} title="Node.js" />
          <SkillCard icon={<ExpressSvg />} title="Express.js" />
          <SkillCard icon={<MongoDBSvg />} title="MongoDB" />
          <SkillCard icon={<MySQLSvg />} title="MySQL" />
          <SkillCard icon={<PowerBISvg />} title="Power BI" />
          <SkillCard icon={<NumpySvg />} title="NumPy" />
          <SkillCard icon={<PandasSvg />} title="Pandas" />
          <SkillCard icon={<GitSvg />} title="Git" />
          <SkillCard icon={<PrismaSvg />} title="Prisma" />
          <SkillCard icon={<NestjsSvg />} title="NestJS" />
          <SkillCard icon={<DockerSvg />} title="Docker" />
          <SkillCard icon={<KubenetesSvg />} title="Kubenetes" />
          <SkillCard icon={<GolangSvg />} title="Go" />
        </div>
      </div>
    </section>
  );
};

export default MySkill;
