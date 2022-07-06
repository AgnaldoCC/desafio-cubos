import { languages } from "../../../enums/languages";
import { status } from "../../../enums/status";
import { Movie } from "../../../types/commonTypes"
import { formatter } from "../../../utils/currencyFormatter";
import InfoColumn from "./InfoColumn";

type CardInfoColumnsProps = {
  movie: Movie;
}

export const Status = (props: CardInfoColumnsProps) => {
  return (
    <InfoColumn title="Situação" content={status[props.movie.status as keyof typeof status]} />
  );
};

export const Language = (props: CardInfoColumnsProps) => {
  return (
    <InfoColumn title="Idioma" content={languages[props.movie.original_language as keyof typeof languages]} />
  );
};

export const Duration = (props: CardInfoColumnsProps) => {
  const duration = props.movie.runtime;
  const hours = Math.floor(duration /60);
  const minutes = duration % 60;
  return (
    <InfoColumn title="Duração" content={`${hours > 0 ? `${hours}h` : ""}${minutes}min`} />
  );
};

export const Budget = (props: CardInfoColumnsProps) => {
  return (
    <InfoColumn title="Orçamento" content={formatter.format(props.movie.budget)} />
  );
};

export const Revenue = (props: CardInfoColumnsProps) => {
  return (
    <InfoColumn title="Receita" content={formatter.format(props.movie.revenue)} />
  );
};

export const Profit = (props: CardInfoColumnsProps) => {
  const profit = props.movie.revenue - props.movie.budget;
  return (
    <InfoColumn title="Lucro" content={formatter.format(profit)} />
  );
};
