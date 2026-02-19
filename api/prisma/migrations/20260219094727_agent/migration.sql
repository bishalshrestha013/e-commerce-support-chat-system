-- CreateTable
CREATE TABLE "Agent" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);
