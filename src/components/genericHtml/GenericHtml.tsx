import styes from './GenericHtml.module.css'

type GenericHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtmlProps) {
  return <div className={styes.genericHtml}>{children}</div>;
}