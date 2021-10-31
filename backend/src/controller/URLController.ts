import { URLModel } from "../database/model/URL";
import { Request, response, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    // Ver se a URL já não existe
    const { originalURL } = req.body;
    const url = await URLModel.findOne({ originalURL });
    if (url) {
      res.json(url);
      return;
    }

    // Criar o hash para URL
    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;

    // Salvar URL no banco
    const newURL = await URLModel.create({
      originalURL,
      hash,
      shortURL,
    });

    // Retornar URL salva
    res.json({ originalURL, hash, shortURL });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    // Pegar o hash da URL
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });

    if (url) {
      res.redirect(url.originalURL);
      return;
    }

    res.status(400).json({ error: "URL not found" });
  }
}
