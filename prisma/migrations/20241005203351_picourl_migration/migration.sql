-- CreateTable
CREATE TABLE "Url" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "original_url" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UrlAnalytics" (
    "id" BIGSERIAL NOT NULL,
    "accessed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "referrer_url" TEXT,
    "country" VARCHAR(50),
    "city" VARCHAR(50),

    CONSTRAINT "UrlAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_original_url_key" ON "Url"("original_url");

-- Set starting point for Url id sequence
ALTER SEQUENCE "Url_id_seq" RESTART WITH 10000;

-- Set starting point for UrlAnalytics id sequence
ALTER SEQUENCE "UrlAnalytics_id_seq" RESTART WITH 10000;
