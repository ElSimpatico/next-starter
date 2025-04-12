import { getTranslations } from 'next-intl/server';

import { CommonServerProps } from "@/types/CommonProps";

export default async function Product({ params }: CommonServerProps) {
    const { id } = await params ?? {};
    const t = await getTranslations("ProductDetail");
    return (
        <div>
            <h1>{t("title")}</h1>
            <p>{t("subtitle", { product: id as string })}</p>
        </div>
    );
}
